import RealMapMidhemRulesKeywordPage, { generateMetadata } from './real-map-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemRulesKeywordPage />;
}
