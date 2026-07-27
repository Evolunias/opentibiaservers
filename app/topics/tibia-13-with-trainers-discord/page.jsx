import Tibia13WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-13-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersDiscordKeywordPage />;
}
