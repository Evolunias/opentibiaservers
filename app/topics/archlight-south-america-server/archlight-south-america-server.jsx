import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-south-america-server');
}

export default function ArchlightSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-south-america-server" />;
}
