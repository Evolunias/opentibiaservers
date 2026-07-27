import Tibia76WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersLaunchKeywordPage />;
}
