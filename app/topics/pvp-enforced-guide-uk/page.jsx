import PvpEnforcedGuideUkKeywordPage, { generateMetadata } from './pvp-enforced-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuideUkKeywordPage />;
}
