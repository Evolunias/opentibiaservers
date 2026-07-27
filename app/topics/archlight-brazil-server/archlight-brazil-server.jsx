import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-brazil-server');
}

export default function ArchlightBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-brazil-server" />;
}
