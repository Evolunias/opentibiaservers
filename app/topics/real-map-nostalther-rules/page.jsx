import RealMapNostaltherRulesKeywordPage, { generateMetadata } from './real-map-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherRulesKeywordPage />;
}
