import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-ot');
}

export default function TibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="tibiara-ot" />;
}
