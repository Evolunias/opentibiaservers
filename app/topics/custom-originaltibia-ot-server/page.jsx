import CustomOriginaltibiaOtServerKeywordPage, { generateMetadata } from './custom-originaltibia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaOtServerKeywordPage />;
}
