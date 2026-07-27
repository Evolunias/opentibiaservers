import CustomDemolidoresDiscordKeywordPage, { generateMetadata } from './custom-demolidores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresDiscordKeywordPage />;
}
