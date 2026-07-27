import PvpEnforcedClientBrazilKeywordPage, { generateMetadata } from './pvp-enforced-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientBrazilKeywordPage />;
}
