import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-client');
}

export default function ActiveHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-client" />;
}
