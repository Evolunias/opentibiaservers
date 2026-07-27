import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-ots');
}

export default function TopLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-ots" />;
}
