import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-latin-america-servers');
}

export default function ArchlightLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-latin-america-servers" />;
}
