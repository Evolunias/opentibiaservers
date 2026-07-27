import NonPvpGuideGermanyKeywordPage, { generateMetadata } from './non-pvp-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideGermanyKeywordPage />;
}
