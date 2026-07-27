import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-ots');
}

export default function NoResetXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-ots" />;
}
