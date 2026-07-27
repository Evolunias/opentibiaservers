import NoResetGuidePolandKeywordPage, { generateMetadata } from './no-reset-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGuidePolandKeywordPage />;
}
