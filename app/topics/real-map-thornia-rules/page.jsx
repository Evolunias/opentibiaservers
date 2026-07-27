import RealMapThorniaRulesKeywordPage, { generateMetadata } from './real-map-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaRulesKeywordPage />;
}
