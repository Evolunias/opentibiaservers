import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-brazil-servers');
}

export default function SabrehavenBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-brazil-servers" />;
}
