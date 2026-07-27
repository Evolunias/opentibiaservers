import OtServersDiscordKeywordPage, { generateMetadata } from './ot-servers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersDiscordKeywordPage />;
}
