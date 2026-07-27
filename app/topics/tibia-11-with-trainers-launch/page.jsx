import Tibia11WithTrainersLaunchKeywordPage, { generateMetadata } from './tibia-11-with-trainers-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersLaunchKeywordPage />;
}
