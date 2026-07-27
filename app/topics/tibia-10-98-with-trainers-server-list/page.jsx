import Tibia1098WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-10-98-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithTrainersServerListKeywordPage />;
}
