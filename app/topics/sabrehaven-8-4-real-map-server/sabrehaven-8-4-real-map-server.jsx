import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-real-map-server');
}

export default function Sabrehaven84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-real-map-server" />;
}
