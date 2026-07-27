import TibiameTrainingKeywordPage, { generateMetadata } from './tibiame-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameTrainingKeywordPage />;
}
