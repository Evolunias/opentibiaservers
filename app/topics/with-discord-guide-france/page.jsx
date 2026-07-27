import WithDiscordGuideFranceKeywordPage, { generateMetadata } from './with-discord-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideFranceKeywordPage />;
}
