import RealMapTibianusRulesKeywordPage, { generateMetadata } from './real-map-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusRulesKeywordPage />;
}
