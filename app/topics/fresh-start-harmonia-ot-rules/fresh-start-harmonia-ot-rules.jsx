import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-rules');
}

export default function FreshStartHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-rules" />;
}
