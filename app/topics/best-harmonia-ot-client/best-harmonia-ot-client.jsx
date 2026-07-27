import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-client');
}

export default function BestHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-client" />;
}
