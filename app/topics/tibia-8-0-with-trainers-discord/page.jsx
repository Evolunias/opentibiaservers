import Tibia80WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersDiscordKeywordPage />;
}
