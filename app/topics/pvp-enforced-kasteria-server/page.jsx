import PvpEnforcedKasteriaServerKeywordPage, { generateMetadata } from './pvp-enforced-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedKasteriaServerKeywordPage />;
}
