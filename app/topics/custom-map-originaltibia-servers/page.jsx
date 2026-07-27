import CustomMapOriginaltibiaServersKeywordPage, { generateMetadata } from './custom-map-originaltibia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOriginaltibiaServersKeywordPage />;
}
