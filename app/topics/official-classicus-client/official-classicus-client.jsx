import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-client');
}

export default function OfficialClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-client" />;
}
