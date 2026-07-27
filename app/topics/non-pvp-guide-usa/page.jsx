import NonPvpGuideUsaKeywordPage, { generateMetadata } from './non-pvp-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideUsaKeywordPage />;
}
