import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-ots');
}

export default function CurrentSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-ots" />;
}
