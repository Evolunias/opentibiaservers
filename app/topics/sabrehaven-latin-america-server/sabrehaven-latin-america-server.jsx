import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-latin-america-server');
}

export default function SabrehavenLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-latin-america-server" />;
}
