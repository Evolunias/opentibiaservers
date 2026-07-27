import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-ots');
}

export default function LowrateSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-ots" />;
}
