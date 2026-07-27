import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-ots');
}

export default function FreshStartLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-ots" />;
}
