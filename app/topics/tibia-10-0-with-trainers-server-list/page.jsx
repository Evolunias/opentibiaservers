import Tibia100WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersServerListKeywordPage />;
}
