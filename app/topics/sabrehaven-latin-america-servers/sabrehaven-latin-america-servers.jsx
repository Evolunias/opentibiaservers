import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-latin-america-servers');
}

export default function SabrehavenLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-latin-america-servers" />;
}
