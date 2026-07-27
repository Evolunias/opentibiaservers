import Tibia86WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersLaunchKeywordPage />;
}
