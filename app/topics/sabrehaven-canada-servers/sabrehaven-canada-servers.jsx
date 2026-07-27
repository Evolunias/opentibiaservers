import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-canada-servers');
}

export default function SabrehavenCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-canada-servers" />;
}
