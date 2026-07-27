import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-brazil-servers');
}

export default function ArchlightBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-brazil-servers" />;
}
