import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-fresh-start-server');
}

export default function MistOfDeath14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-fresh-start-server" />;
}
