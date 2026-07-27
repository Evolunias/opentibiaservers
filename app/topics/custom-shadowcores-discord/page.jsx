import CustomShadowcoresDiscordKeywordPage, { generateMetadata } from './custom-shadowcores-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresDiscordKeywordPage />;
}
