import OriginaltibiaGuideKeywordPage, { generateMetadata } from './originaltibia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaGuideKeywordPage />;
}
