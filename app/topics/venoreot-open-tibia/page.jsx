import VenoreotOpenTibiaKeywordPage, { generateMetadata } from './venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotOpenTibiaKeywordPage />;
}
