import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-mexico-servers');
}

export default function UnlineMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-mexico-servers" />;
}
