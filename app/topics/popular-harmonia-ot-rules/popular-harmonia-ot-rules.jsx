import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-rules');
}

export default function PopularHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-rules" />;
}
