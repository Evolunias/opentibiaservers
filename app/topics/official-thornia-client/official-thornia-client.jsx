import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-client');
}

export default function OfficialThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-client" />;
}
