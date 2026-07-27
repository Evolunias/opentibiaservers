import CustomSabrehavenDiscordKeywordPage, { generateMetadata } from './custom-sabrehaven-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenDiscordKeywordPage />;
}
