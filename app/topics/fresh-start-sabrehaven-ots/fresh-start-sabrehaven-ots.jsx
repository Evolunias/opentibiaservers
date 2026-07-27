import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-ots');
}

export default function FreshStartSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-ots" />;
}
