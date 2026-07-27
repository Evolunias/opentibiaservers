import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-client');
}

export default function PopularHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-client" />;
}
