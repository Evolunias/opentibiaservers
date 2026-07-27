import CustomMapThaisotServerKeywordPage, { generateMetadata } from './custom-map-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapThaisotServerKeywordPage />;
}
