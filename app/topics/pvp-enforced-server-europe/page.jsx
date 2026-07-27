import PvpEnforcedServerEuropeKeywordPage, { generateMetadata } from './pvp-enforced-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerEuropeKeywordPage />;
}
