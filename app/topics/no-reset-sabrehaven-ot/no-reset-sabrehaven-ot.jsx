import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-ot');
}

export default function NoResetSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-ot" />;
}
