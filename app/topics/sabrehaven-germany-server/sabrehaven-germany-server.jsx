import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-germany-server');
}

export default function SabrehavenGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-germany-server" />;
}
