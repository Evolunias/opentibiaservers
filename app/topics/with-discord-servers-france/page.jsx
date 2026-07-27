import WithDiscordServersFranceKeywordPage, { generateMetadata } from './with-discord-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersFranceKeywordPage />;
}
