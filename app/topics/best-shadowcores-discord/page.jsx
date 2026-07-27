import BestShadowcoresDiscordKeywordPage, { generateMetadata } from './best-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresDiscordKeywordPage />;
}
