import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara');
}

export default function TibiaraKeywordPage() {
  return <StaticKeywordPage slug="tibiara" />;
}
