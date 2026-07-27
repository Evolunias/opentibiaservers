import OfficialEvoluniaOnlineKeywordPage, { generateMetadata } from './official-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaOnlineKeywordPage />;
}
