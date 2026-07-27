import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-login');
}

export default function OfficialCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="official-canob-login" />;
}
