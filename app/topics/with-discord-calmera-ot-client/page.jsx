import WithDiscordCalmeraOtClientKeywordPage, { generateMetadata } from './with-discord-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCalmeraOtClientKeywordPage />;
}
