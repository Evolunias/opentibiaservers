import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-brazil-server');
}

export default function SabrehavenBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-brazil-server" />;
}
