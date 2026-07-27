import VenoreotTibiaKeywordPage, { generateMetadata } from './venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotTibiaKeywordPage />;
}
