import Tibia96WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersLaunchKeywordPage />;
}
