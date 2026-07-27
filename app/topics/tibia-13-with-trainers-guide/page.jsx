import Tibia13WithTrainersGuideKeywordPage, { generateMetadata } from './tibia-13-with-trainers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersGuideKeywordPage />;
}
