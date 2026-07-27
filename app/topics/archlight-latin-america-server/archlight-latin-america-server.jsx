import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-latin-america-server');
}

export default function ArchlightLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-latin-america-server" />;
}
