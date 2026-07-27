import Tibia74WithTrainersClientKeywordPage, { generateMetadata } from './tibia-7-4-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithTrainersClientKeywordPage />;
}
