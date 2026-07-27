import PvpEnforcedAmeriaServerKeywordPage, { generateMetadata } from './pvp-enforced-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedAmeriaServerKeywordPage />;
}
