import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-unline-server');
}

export default function NonPvpUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-unline-server" />;
}
