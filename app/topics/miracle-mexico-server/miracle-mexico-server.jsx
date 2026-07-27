import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-mexico-server');
}

export default function MiracleMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-mexico-server" />;
}
