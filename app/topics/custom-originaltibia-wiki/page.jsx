import CustomOriginaltibiaWikiKeywordPage, { generateMetadata } from './custom-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaWikiKeywordPage />;
}
