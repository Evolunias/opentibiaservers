import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-argentina-server');
}

export default function SabrehavenArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-argentina-server" />;
}
