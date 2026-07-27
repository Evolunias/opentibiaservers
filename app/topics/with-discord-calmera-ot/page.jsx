import WithDiscordCalmeraOtKeywordPage, { generateMetadata } from './with-discord-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtKeywordPage />;
}
