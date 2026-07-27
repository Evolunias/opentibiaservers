import WithDiscordNilotOtKeywordPage, { generateMetadata } from './with-discord-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotOtKeywordPage />;
}
