import PvpEnforcedMistOfDeathServerKeywordPage, { generateMetadata } from './pvp-enforced-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedMistOfDeathServerKeywordPage />;
}
