import Tibia80WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersServerListKeywordPage />;
}
