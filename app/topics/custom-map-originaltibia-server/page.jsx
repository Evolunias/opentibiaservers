import CustomMapOriginaltibiaServerKeywordPage, { generateMetadata } from './custom-map-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOriginaltibiaServerKeywordPage />;
}
