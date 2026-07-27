import CustomMapRubinotServersKeywordPage, { generateMetadata } from './custom-map-rubinot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRubinotServersKeywordPage />;
}
