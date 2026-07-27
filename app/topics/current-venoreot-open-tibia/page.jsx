import CurrentVenoreotOpenTibiaKeywordPage, { generateMetadata } from './current-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOpenTibiaKeywordPage />;
}
