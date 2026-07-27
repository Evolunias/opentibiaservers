import CustomOriginaltibiaClientKeywordPage, { generateMetadata } from './custom-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaClientKeywordPage />;
}
