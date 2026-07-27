import ActiveOriginaltibiaGuideKeywordPage, { generateMetadata } from './active-originaltibia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaGuideKeywordPage />;
}
