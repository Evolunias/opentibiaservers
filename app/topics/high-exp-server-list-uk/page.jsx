import HighExpServerListUkKeywordPage, { generateMetadata } from './high-exp-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListUkKeywordPage />;
}
