import NoResetGuideEuropeKeywordPage, { generateMetadata } from './no-reset-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideEuropeKeywordPage />;
}
