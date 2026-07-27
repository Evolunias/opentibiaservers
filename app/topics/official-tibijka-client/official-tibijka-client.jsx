import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-client');
}

export default function OfficialTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-client" />;
}
