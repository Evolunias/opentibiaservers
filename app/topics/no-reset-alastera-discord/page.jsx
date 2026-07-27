import NoResetAlasteraDiscordKeywordPage, { generateMetadata } from './no-reset-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraDiscordKeywordPage />;
}
