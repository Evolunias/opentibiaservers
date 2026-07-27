import Tibia15WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-15-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersLaunchKeywordPage />;
}
