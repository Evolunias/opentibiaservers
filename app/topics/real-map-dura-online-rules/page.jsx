import RealMapDuraOnlineRulesKeywordPage, { generateMetadata } from './real-map-dura-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineRulesKeywordPage />;
}
