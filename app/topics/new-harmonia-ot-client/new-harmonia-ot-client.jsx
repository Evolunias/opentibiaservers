import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-client');
}

export default function NewHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-client" />;
}
