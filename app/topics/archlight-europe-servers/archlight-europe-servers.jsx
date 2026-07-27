import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-europe-servers');
}

export default function ArchlightEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-europe-servers" />;
}
