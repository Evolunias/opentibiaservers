import PvpEnforcedBlazeraServerKeywordPage, { generateMetadata } from './pvp-enforced-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedBlazeraServerKeywordPage />;
}
