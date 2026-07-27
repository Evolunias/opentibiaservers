import CurrentVenoreotTibiaKeywordPage, { generateMetadata } from './current-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotTibiaKeywordPage />;
}
