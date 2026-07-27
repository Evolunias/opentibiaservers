import HighExpServerListEuropeKeywordPage, { generateMetadata } from './high-exp-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListEuropeKeywordPage />;
}
