import Tibia14WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-14-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersLaunchKeywordPage />;
}
