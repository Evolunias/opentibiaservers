import RealMapMediviaRulesKeywordPage, { generateMetadata } from './real-map-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaRulesKeywordPage />;
}
