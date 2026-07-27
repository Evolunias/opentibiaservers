import Tibia12WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-12-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersLaunchKeywordPage />;
}
