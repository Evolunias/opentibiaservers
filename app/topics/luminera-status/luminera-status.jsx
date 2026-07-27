import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-status');
}

export default function LumineraStatusKeywordPage() {
  return <StaticKeywordPage slug="luminera-status" />;
}
