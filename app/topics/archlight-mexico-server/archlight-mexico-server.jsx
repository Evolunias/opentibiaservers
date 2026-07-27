import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-mexico-server');
}

export default function ArchlightMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-mexico-server" />;
}
