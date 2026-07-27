import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-mexico-servers');
}

export default function ArchlightMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-mexico-servers" />;
}
