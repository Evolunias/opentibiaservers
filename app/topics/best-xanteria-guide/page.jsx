import BestXanteriaGuideKeywordPage, { generateMetadata } from './best-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaGuideKeywordPage />;
}
