import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-canada-server');
}

export default function SabrehavenCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-canada-server" />;
}
