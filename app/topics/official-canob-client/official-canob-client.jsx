import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-client');
}

export default function OfficialCanobClientKeywordPage() {
  return <StaticKeywordPage slug="official-canob-client" />;
}
