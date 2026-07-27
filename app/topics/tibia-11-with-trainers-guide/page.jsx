import Tibia11WithTrainersGuideKeywordPage, { generateMetadata } from './tibia-11-with-trainers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersGuideKeywordPage />;
}
