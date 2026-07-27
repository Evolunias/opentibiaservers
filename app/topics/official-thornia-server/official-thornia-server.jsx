import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-server');
}

export default function OfficialThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-server" />;
}
