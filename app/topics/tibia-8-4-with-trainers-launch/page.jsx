import Tibia84WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersLaunchKeywordPage />;
}
