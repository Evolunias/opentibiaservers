import Tibia86WithTrainersGuideKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersGuideKeywordPage />;
}
