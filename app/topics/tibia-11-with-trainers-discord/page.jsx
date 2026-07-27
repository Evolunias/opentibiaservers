import Tibia11WithTrainersDiscordKeywordPage, { generateMetadata } from './tibia-11-with-trainers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersDiscordKeywordPage />;
}
