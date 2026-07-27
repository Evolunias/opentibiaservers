import BaiakDiscordNorthAmericaKeywordPage, { generateMetadata } from './baiak-discord-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordNorthAmericaKeywordPage />;
}
