import PvpEnforcedClientEuropeKeywordPage, { generateMetadata } from './pvp-enforced-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientEuropeKeywordPage />;
}
