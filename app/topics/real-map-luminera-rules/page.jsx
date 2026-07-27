import RealMapLumineraRulesKeywordPage, { generateMetadata } from './real-map-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraRulesKeywordPage />;
}
