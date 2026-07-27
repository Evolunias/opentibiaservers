import Tibia81WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersLaunchKeywordPage />;
}
