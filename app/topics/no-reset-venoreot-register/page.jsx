import NoResetVenoreotRegisterKeywordPage, { generateMetadata } from './no-reset-venoreot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotRegisterKeywordPage />;
}
