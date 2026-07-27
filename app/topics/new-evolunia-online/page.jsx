import NewEvoluniaOnlineKeywordPage, { generateMetadata } from './new-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaOnlineKeywordPage />;
}
