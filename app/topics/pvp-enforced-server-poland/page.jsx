import PvpEnforcedServerPolandKeywordPage, { generateMetadata } from './pvp-enforced-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedServerPolandKeywordPage />;
}
