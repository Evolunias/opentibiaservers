import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-fresh-start-server');
}

export default function MistOfDeath84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-fresh-start-server" />;
}
