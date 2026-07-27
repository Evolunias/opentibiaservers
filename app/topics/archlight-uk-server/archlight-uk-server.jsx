import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-uk-server');
}

export default function ArchlightUkServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-uk-server" />;
}
