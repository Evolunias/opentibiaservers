import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-ot');
}

export default function NoResetXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-ot" />;
}
