import HighrateEvoluniaOnlineKeywordPage, { generateMetadata } from './highrate-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaOnlineKeywordPage />;
}
