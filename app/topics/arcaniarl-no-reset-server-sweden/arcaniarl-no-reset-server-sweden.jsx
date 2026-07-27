import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-sweden');
}

export default function ArcaniarlNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-sweden" />;
}
