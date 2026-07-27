import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-uk');
}

export default function LumineraPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-uk" />;
}
