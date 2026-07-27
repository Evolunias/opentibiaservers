import NoResetNepreniaGuideKeywordPage, { generateMetadata } from './no-reset-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaGuideKeywordPage />;
}
