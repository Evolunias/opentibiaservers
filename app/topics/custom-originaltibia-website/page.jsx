import CustomOriginaltibiaWebsiteKeywordPage, { generateMetadata } from './custom-originaltibia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaWebsiteKeywordPage />;
}
