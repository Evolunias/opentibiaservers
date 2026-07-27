import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-ots');
}

export default function LowrateLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-ots" />;
}
