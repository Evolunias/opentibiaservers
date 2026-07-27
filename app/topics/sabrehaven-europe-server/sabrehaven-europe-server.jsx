import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-europe-server');
}

export default function SabrehavenEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-europe-server" />;
}
