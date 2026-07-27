import PopularEvoluniaOnlineKeywordPage, { generateMetadata } from './popular-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaOnlineKeywordPage />;
}
