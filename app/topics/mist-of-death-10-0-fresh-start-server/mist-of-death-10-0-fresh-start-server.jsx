import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-fresh-start-server');
}

export default function MistOfDeath100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-fresh-start-server" />;
}
