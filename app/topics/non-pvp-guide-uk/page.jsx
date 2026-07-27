import NonPvpGuideUkKeywordPage, { generateMetadata } from './non-pvp-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideUkKeywordPage />;
}
