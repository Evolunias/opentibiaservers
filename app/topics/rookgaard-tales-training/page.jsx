import RookgaardTalesTrainingKeywordPage, { generateMetadata } from './rookgaard-tales-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesTrainingKeywordPage />;
}
