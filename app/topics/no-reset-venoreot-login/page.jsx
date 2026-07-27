import NoResetVenoreotLoginKeywordPage, { generateMetadata } from './no-reset-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotLoginKeywordPage />;
}
