import PvpEnforcedTibijkaServerKeywordPage, { generateMetadata } from './pvp-enforced-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedTibijkaServerKeywordPage />;
}
