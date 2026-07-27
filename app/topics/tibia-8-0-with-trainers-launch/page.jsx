import Tibia80WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersLaunchKeywordPage />;
}
