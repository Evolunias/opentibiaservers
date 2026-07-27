import OtlandServerGalaDiscordKeywordPage, { generateMetadata } from './otland-server-gala-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaDiscordKeywordPage />;
}
