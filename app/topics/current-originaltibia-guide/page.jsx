import CurrentOriginaltibiaGuideKeywordPage, { generateMetadata } from './current-originaltibia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaGuideKeywordPage />;
}
