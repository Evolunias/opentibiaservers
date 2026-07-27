import PopularCoxaotDiscordKeywordPage, { generateMetadata } from './popular-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotDiscordKeywordPage />;
}
