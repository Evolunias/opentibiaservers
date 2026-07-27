import CustomZuneraOtDiscordKeywordPage, { generateMetadata } from './custom-zunera-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtDiscordKeywordPage />;
}
