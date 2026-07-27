import ActiveEvoluniaOnlineKeywordPage, { generateMetadata } from './active-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaOnlineKeywordPage />;
}
