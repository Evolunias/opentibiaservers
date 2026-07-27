import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-server');
}

export default function OfficialUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="official-unline-server" />;
}
