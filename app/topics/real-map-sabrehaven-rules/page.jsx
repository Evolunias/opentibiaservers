import RealMapSabrehavenRulesKeywordPage, { generateMetadata } from './real-map-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenRulesKeywordPage />;
}
