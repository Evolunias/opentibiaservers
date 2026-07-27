import CustomMapClientMexicoKeywordPage, { generateMetadata } from './custom-map-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientMexicoKeywordPage />;
}
