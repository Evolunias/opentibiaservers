import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-client');
}

export default function TopHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-client" />;
}
