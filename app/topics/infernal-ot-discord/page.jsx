import InfernalOtDiscordKeywordPage, { generateMetadata } from './infernal-ot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtDiscordKeywordPage />;
}
