import RealMapNilotRulesKeywordPage, { generateMetadata } from './real-map-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotRulesKeywordPage />;
}
