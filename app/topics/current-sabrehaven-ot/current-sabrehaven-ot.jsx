import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-ot');
}

export default function CurrentSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-ot" />;
}
