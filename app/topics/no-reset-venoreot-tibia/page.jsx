import NoResetVenoreotTibiaKeywordPage, { generateMetadata } from './no-reset-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotTibiaKeywordPage />;
}
