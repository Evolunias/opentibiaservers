import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-poland');
}

export default function LumineraPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-poland" />;
}
