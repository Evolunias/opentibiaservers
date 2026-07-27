import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-mexico-server');
}

export default function CanobMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-mexico-server" />;
}
