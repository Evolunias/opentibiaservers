import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-poland');
}

export default function SabrehavenPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-poland" />;
}
