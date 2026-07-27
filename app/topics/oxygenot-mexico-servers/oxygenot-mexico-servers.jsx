import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-mexico-servers');
}

export default function OxygenotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-mexico-servers" />;
}
