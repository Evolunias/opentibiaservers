import PvpEnforcedCarlinotServerKeywordPage, { generateMetadata } from './pvp-enforced-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedCarlinotServerKeywordPage />;
}
