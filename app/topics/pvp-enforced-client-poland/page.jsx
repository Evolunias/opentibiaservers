import PvpEnforcedClientPolandKeywordPage, { generateMetadata } from './pvp-enforced-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedClientPolandKeywordPage />;
}
