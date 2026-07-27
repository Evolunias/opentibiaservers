import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-usa-server');
}

export default function SabrehavenUsaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-usa-server" />;
}
