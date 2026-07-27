import PvpEnforcedClientUkKeywordPage, { generateMetadata } from './pvp-enforced-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientUkKeywordPage />;
}
