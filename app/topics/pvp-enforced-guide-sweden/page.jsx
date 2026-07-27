import PvpEnforcedGuideSwedenKeywordPage, { generateMetadata } from './pvp-enforced-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuideSwedenKeywordPage />;
}
