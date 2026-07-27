import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-south-america-servers');
}

export default function ArchlightSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-south-america-servers" />;
}
