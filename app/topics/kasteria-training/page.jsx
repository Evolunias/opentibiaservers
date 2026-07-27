import KasteriaTrainingKeywordPage, { generateMetadata } from './kasteria-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaTrainingKeywordPage />;
}
