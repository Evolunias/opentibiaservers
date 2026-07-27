import Tibia86WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersDiscordKeywordPage />;
}
