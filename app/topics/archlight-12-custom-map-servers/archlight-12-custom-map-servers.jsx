import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-custom-map-servers');
}

export default function Archlight12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-custom-map-servers" />;
}
