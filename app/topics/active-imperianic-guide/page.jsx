import ActiveImperianicGuideKeywordPage, { generateMetadata } from './active-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicGuideKeywordPage />;
}
