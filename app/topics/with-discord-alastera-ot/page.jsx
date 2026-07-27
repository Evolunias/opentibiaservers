import WithDiscordAlasteraOtKeywordPage, { generateMetadata } from './with-discord-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraOtKeywordPage />;
}
