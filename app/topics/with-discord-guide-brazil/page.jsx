import WithDiscordGuideBrazilKeywordPage, { generateMetadata } from './with-discord-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideBrazilKeywordPage />;
}
