import ActiveRubinotGuideKeywordPage, { generateMetadata } from './active-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotGuideKeywordPage />;
}
