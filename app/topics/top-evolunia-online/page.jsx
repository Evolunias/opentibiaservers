import TopEvoluniaOnlineKeywordPage, { generateMetadata } from './top-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaOnlineKeywordPage />;
}
