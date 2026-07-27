import NoResetGuideUkKeywordPage, { generateMetadata } from './no-reset-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuideUkKeywordPage />;
}
