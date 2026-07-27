import LowExpServerListMexicoKeywordPage, { generateMetadata } from './low-exp-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListMexicoKeywordPage />;
}
