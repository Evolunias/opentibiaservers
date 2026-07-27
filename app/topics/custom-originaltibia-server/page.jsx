import CustomOriginaltibiaServerKeywordPage, { generateMetadata } from './custom-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaServerKeywordPage />;
}
