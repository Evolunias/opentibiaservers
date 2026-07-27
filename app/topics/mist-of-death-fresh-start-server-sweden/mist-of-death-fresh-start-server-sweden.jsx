import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-sweden');
}

export default function MistOfDeathFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-sweden" />;
}
