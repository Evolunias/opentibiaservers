import LowExpDiscordLatinAmericaKeywordPage, { generateMetadata } from './low-exp-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordLatinAmericaKeywordPage />;
}
