import CustomMapOtServerMexicoKeywordPage, { generateMetadata } from './custom-map-ot-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerMexicoKeywordPage />;
}
