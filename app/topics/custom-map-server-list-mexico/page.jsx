import CustomMapServerListMexicoKeywordPage, { generateMetadata } from './custom-map-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListMexicoKeywordPage />;
}
