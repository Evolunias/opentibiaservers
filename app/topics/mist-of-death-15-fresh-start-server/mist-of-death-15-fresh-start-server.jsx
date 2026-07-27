import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-fresh-start-server');
}

export default function MistOfDeath15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-fresh-start-server" />;
}
