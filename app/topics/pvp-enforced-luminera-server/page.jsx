import PvpEnforcedLumineraServerKeywordPage, { generateMetadata } from './pvp-enforced-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedLumineraServerKeywordPage />;
}
