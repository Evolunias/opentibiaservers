import Tibia100WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersLaunchKeywordPage />;
}
