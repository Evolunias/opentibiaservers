import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-sweden');
}

export default function ArcaniarlLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-sweden" />;
}
