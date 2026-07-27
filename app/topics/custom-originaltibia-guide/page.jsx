import CustomOriginaltibiaGuideKeywordPage, { generateMetadata } from './custom-originaltibia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaGuideKeywordPage />;
}
