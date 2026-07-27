import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-unline-server');
}

export default function PvpUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-unline-server" />;
}
