import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-poland-server');
}

export default function SabrehavenPolandServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-poland-server" />;
}
