import OfficialRookgaardTalesKeywordPage, { generateMetadata } from './official-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRookgaardTalesKeywordPage />;
}
