import NoResetVenoreotGuideKeywordPage, { generateMetadata } from './no-reset-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotGuideKeywordPage />;
}
