import PvpGuideSwedenKeywordPage, { generateMetadata } from './pvp-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideSwedenKeywordPage />;
}
