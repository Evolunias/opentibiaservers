import NoResetKasteriaGuideKeywordPage, { generateMetadata } from './no-reset-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaGuideKeywordPage />;
}
