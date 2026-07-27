import PvpOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './pvp-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpOpenTibiaServerGermanyKeywordPage />;
}
