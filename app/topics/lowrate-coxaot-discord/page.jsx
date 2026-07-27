import LowrateCoxaotDiscordKeywordPage, { generateMetadata } from './lowrate-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotDiscordKeywordPage />;
}
