import BestEvoluniaOnlineKeywordPage, { generateMetadata } from './best-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaOnlineKeywordPage />;
}
