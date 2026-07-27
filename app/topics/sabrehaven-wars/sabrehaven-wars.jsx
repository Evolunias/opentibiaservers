import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-wars');
}

export default function SabrehavenWarsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-wars" />;
}
