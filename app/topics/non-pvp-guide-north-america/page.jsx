import NonPvpGuideNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideNorthAmericaKeywordPage />;
}
