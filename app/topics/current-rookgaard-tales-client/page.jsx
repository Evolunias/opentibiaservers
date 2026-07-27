import CurrentRookgaardTalesClientKeywordPage, { generateMetadata } from './current-rookgaard-tales-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesClientKeywordPage />;
}
