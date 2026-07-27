import ShadowcoresDiscordKeywordPage, { generateMetadata } from './shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresDiscordKeywordPage />;
}
