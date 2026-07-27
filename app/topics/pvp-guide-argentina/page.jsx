import PvpGuideArgentinaKeywordPage, { generateMetadata } from './pvp-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideArgentinaKeywordPage />;
}
