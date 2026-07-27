import WithDiscordCoxaotOtsKeywordPage, { generateMetadata } from './with-discord-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotOtsKeywordPage />;
}
