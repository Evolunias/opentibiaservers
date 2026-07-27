import RookgaardTalesGuideKeywordPage, { generateMetadata } from './rookgaard-tales-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesGuideKeywordPage />;
}
