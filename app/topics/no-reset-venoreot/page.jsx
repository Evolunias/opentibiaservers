import NoResetVenoreotKeywordPage, { generateMetadata } from './no-reset-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotKeywordPage />;
}
