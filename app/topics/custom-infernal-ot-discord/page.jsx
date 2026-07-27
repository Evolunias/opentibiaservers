import CustomInfernalOtDiscordKeywordPage, { generateMetadata } from './custom-infernal-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtDiscordKeywordPage />;
}
