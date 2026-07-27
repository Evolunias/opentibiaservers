import RealMapNtoStarRulesKeywordPage, { generateMetadata } from './real-map-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarRulesKeywordPage />;
}
