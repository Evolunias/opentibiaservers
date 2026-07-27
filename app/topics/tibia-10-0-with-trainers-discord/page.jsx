import Tibia100WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersDiscordKeywordPage />;
}
