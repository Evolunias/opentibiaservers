import PvpEnforcedSabrehavenServerKeywordPage, { generateMetadata } from './pvp-enforced-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedSabrehavenServerKeywordPage />;
}
