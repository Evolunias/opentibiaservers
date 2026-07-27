import CustomArcaniarlDiscordKeywordPage, { generateMetadata } from './custom-arcaniarl-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlDiscordKeywordPage />;
}
