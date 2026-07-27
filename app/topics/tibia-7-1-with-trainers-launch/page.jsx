import Tibia71WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersLaunchKeywordPage />;
}
