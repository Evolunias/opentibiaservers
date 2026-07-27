import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-ot');
}

export default function LowrateSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-ot" />;
}
