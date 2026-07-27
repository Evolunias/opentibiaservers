import Tibia96WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersDiscordKeywordPage />;
}
