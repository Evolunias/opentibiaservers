import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-similar-servers');
}

export default function SabrehavenSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-similar-servers" />;
}
