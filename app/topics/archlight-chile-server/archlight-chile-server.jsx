import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-chile-server');
}

export default function ArchlightChileServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-chile-server" />;
}
