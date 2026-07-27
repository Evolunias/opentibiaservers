import WithDiscordBlazeraLoginKeywordPage, { generateMetadata } from './with-discord-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraLoginKeywordPage />;
}
