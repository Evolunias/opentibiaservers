import NonPvpGuideSwedenKeywordPage, { generateMetadata } from './non-pvp-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpGuideSwedenKeywordPage />;
}
