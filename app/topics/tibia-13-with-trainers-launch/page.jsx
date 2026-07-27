import Tibia13WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-13-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersLaunchKeywordPage />;
}
