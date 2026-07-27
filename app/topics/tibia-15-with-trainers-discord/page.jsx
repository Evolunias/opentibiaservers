import Tibia15WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-15-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersDiscordKeywordPage />;
}
