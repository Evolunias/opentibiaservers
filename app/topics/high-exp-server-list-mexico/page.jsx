import HighExpServerListMexicoKeywordPage, { generateMetadata } from './high-exp-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListMexicoKeywordPage />;
}
