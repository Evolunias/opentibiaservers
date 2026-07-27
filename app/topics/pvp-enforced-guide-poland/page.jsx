import PvpEnforcedGuidePolandKeywordPage, { generateMetadata } from './pvp-enforced-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuidePolandKeywordPage />;
}
