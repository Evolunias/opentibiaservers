import LowExpDiscordBrazilKeywordPage, { generateMetadata } from './low-exp-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordBrazilKeywordPage />;
}
