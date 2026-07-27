import PvpEnforcedXanteriaServerKeywordPage, { generateMetadata } from './pvp-enforced-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedXanteriaServerKeywordPage />;
}
