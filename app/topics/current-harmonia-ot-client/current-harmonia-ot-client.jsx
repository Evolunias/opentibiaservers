import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-client');
}

export default function CurrentHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-client" />;
}
