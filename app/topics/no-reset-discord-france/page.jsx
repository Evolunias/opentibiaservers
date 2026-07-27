import NoResetDiscordFranceKeywordPage, { generateMetadata } from './no-reset-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDiscordFranceKeywordPage />;
}
