import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-wars');
}

export default function LumineraWarsKeywordPage() {
  return <StaticKeywordPage slug="luminera-wars" />;
}
