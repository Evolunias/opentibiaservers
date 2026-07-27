import BlazeraWithDiscordServerUsaKeywordPage, { generateMetadata } from './blazera-with-discord-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithDiscordServerUsaKeywordPage />;
}
