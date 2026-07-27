import Tibia12WithTrainersGuideKeywordPage, { generateMetadata } from './tibia-12-with-trainers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersGuideKeywordPage />;
}
