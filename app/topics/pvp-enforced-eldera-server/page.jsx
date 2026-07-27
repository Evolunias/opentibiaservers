import PvpEnforcedElderaServerKeywordPage, { generateMetadata } from './pvp-enforced-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedElderaServerKeywordPage />;
}
