import Tibia74WithTrainersServerKeywordPage, { generateMetadata } from './tibia-7-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithTrainersServerKeywordPage />;
}
