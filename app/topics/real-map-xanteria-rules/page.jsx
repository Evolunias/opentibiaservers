import RealMapXanteriaRulesKeywordPage, { generateMetadata } from './real-map-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaRulesKeywordPage />;
}
