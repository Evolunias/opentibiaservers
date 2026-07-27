import Tibia81WithTrainersGuideKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersGuideKeywordPage />;
}
