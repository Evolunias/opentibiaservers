import RealMapSerenityRulesKeywordPage, { generateMetadata } from './real-map-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityRulesKeywordPage />;
}
