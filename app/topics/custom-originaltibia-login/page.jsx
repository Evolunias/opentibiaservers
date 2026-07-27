import CustomOriginaltibiaLoginKeywordPage, { generateMetadata } from './custom-originaltibia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaLoginKeywordPage />;
}
