import CoxaotDiscordKeywordPage, { generateMetadata } from './coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotDiscordKeywordPage />;
}
