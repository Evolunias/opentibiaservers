import Tibia12WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-12-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersDiscordKeywordPage />;
}
