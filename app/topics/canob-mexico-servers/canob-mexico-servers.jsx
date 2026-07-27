import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-mexico-servers');
}

export default function CanobMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-mexico-servers" />;
}
