import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-europe');
}

export default function LumineraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-europe" />;
}
