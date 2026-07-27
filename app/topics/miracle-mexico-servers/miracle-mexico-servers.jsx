import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-mexico-servers');
}

export default function MiracleMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-mexico-servers" />;
}
