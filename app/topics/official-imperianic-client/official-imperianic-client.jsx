import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-client');
}

export default function OfficialImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-client" />;
}
