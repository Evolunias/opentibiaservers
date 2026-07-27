import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-ots');
}

export default function CurrentLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-ots" />;
}
