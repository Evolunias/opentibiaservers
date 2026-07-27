import RealMapCarlinotRulesKeywordPage, { generateMetadata } from './real-map-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotRulesKeywordPage />;
}
