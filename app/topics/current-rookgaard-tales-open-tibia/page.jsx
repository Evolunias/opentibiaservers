import CurrentRookgaardTalesOpenTibiaKeywordPage, { generateMetadata } from './current-rookgaard-tales-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesOpenTibiaKeywordPage />;
}
