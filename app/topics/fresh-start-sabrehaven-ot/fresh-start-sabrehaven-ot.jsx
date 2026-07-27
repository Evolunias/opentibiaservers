import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-ot');
}

export default function FreshStartSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-ot" />;
}
