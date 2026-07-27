import PvpEnforcedClientCanadaKeywordPage, { generateMetadata } from './pvp-enforced-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientCanadaKeywordPage />;
}
