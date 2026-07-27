import ActiveRookgaardTalesKeywordPage, { generateMetadata } from './active-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesKeywordPage />;
}
