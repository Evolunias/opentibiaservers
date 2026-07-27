import NonPvpGuideLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideLatinAmericaKeywordPage />;
}
