import RealMapArchlightRulesKeywordPage, { generateMetadata } from './real-map-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightRulesKeywordPage />;
}
