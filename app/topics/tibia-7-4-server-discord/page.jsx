import Tibia74ServerDiscordKeywordPage, { generateMetadata } from './tibia-7-4-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerDiscordKeywordPage />;
}
