import LowrateXanteriaDiscordKeywordPage, { generateMetadata } from './lowrate-xanteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaDiscordKeywordPage />;
}
