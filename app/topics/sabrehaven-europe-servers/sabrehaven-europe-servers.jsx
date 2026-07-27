import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-europe-servers');
}

export default function SabrehavenEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-europe-servers" />;
}
