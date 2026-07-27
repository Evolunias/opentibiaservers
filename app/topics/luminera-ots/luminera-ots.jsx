import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-ots');
}

export default function LumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="luminera-ots" />;
}
