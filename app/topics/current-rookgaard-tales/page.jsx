import CurrentRookgaardTalesKeywordPage, { generateMetadata } from './current-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesKeywordPage />;
}
