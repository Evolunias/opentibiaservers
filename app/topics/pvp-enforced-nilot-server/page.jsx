import PvpEnforcedNilotServerKeywordPage, { generateMetadata } from './pvp-enforced-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedNilotServerKeywordPage />;
}
