import CustomMapThaisotServersKeywordPage, { generateMetadata } from './custom-map-thaisot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapThaisotServersKeywordPage />;
}
