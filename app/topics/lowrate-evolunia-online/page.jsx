import LowrateEvoluniaOnlineKeywordPage, { generateMetadata } from './lowrate-evolunia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaOnlineKeywordPage />;
}
