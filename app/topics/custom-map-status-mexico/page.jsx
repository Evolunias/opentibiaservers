import CustomMapStatusMexicoKeywordPage, { generateMetadata } from './custom-map-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusMexicoKeywordPage />;
}
