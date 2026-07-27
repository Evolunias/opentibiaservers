import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-server');
}

export default function OfficialCanobServerKeywordPage() {
  return <StaticKeywordPage slug="official-canob-server" />;
}
