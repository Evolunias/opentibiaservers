import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-north-america');
}

export default function FreshStartOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-north-america" />;
}
