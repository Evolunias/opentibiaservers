import LowExpServerListBrazilKeywordPage, { generateMetadata } from './low-exp-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListBrazilKeywordPage />;
}
