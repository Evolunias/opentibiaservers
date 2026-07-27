import ActiveRookgaardTalesOpenTibiaKeywordPage, { generateMetadata } from './active-rookgaard-tales-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesOpenTibiaKeywordPage />;
}
