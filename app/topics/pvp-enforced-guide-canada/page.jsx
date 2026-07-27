import PvpEnforcedGuideCanadaKeywordPage, { generateMetadata } from './pvp-enforced-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuideCanadaKeywordPage />;
}
