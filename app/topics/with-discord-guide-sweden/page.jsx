import WithDiscordGuideSwedenKeywordPage, { generateMetadata } from './with-discord-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideSwedenKeywordPage />;
}
