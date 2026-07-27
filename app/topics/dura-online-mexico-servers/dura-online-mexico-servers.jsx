import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-mexico-servers');
}

export default function DuraOnlineMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-mexico-servers" />;
}
