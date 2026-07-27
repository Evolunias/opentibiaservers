import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-mexico-server');
}

export default function DuraOnlineMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-mexico-server" />;
}
