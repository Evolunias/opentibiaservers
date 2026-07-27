import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-usa');
}

export default function MistOfDeathFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-usa" />;
}
