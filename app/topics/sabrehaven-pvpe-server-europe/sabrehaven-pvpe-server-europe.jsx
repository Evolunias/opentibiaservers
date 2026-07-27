import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-europe');
}

export default function SabrehavenPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-europe" />;
}
