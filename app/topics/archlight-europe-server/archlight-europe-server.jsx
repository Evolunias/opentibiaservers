import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-europe-server');
}

export default function ArchlightEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-europe-server" />;
}
