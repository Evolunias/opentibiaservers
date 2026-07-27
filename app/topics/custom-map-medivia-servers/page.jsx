import CustomMapMediviaServersKeywordPage, { generateMetadata } from './custom-map-medivia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMediviaServersKeywordPage />;
}
