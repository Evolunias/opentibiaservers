import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-client');
}

export default function FreshStartHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-client" />;
}
