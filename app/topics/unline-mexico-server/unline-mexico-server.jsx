import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-mexico-server');
}

export default function UnlineMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-mexico-server" />;
}
