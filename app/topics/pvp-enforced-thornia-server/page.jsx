import PvpEnforcedThorniaServerKeywordPage, { generateMetadata } from './pvp-enforced-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedThorniaServerKeywordPage />;
}
