import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-wars');
}

export default function AldoraWarsKeywordPage() {
  return <StaticKeywordPage slug="aldora-wars" />;
}
