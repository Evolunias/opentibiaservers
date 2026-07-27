import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-server');
}

export default function OfficialMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-server" />;
}
