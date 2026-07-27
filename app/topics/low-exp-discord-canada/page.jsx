import LowExpDiscordCanadaKeywordPage, { generateMetadata } from './low-exp-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordCanadaKeywordPage />;
}
