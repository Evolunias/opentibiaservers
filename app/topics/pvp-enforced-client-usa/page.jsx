import PvpEnforcedClientUsaKeywordPage, { generateMetadata } from './pvp-enforced-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientUsaKeywordPage />;
}
