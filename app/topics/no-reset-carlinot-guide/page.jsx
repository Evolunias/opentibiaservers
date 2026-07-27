import NoResetCarlinotGuideKeywordPage, { generateMetadata } from './no-reset-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotGuideKeywordPage />;
}
