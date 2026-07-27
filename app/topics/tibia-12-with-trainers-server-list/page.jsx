import Tibia12WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-12-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersServerListKeywordPage />;
}
