import BestRookgaardTalesKeywordPage, { generateMetadata } from './best-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesKeywordPage />;
}
