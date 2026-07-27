import RealMapClassicusRulesKeywordPage, { generateMetadata } from './real-map-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusRulesKeywordPage />;
}
