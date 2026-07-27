import WithDiscordGuideCanadaKeywordPage, { generateMetadata } from './with-discord-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideCanadaKeywordPage />;
}
