import HighExpServerListBrazilKeywordPage, { generateMetadata } from './high-exp-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListBrazilKeywordPage />;
}
