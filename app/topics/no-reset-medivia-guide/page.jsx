import NoResetMediviaGuideKeywordPage, { generateMetadata } from './no-reset-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaGuideKeywordPage />;
}
