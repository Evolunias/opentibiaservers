import WithDiscordCoxaotOtKeywordPage, { generateMetadata } from './with-discord-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotOtKeywordPage />;
}
