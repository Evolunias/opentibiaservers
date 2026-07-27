import ActiveRookgaardTalesGuideKeywordPage, { generateMetadata } from './active-rookgaard-tales-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesGuideKeywordPage />;
}
