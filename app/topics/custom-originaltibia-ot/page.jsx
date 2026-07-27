import CustomOriginaltibiaOtKeywordPage, { generateMetadata } from './custom-originaltibia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaOtKeywordPage />;
}
