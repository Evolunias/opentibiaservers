import Tibia1098WithTrainersServerKeywordPage, { generateMetadata } from './tibia-10-98-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithTrainersServerKeywordPage />;
}
