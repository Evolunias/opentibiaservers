import NonPvpGuideCanadaKeywordPage, { generateMetadata } from './non-pvp-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideCanadaKeywordPage />;
}
