import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-reset');
}

export default function LumineraResetKeywordPage() {
  return <StaticKeywordPage slug="luminera-reset" />;
}
