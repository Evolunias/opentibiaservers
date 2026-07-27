import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-server');
}

export default function SabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-server" />;
}
