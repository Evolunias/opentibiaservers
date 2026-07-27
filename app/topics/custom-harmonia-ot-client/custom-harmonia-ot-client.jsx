import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-client');
}

export default function CustomHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-client" />;
}
