import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-mexico-server');
}

export default function OxygenotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-mexico-server" />;
}
