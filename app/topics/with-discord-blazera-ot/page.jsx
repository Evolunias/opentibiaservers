import WithDiscordBlazeraOtKeywordPage, { generateMetadata } from './with-discord-blazera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraOtKeywordPage />;
}
