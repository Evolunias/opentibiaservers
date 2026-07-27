import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-france');
}

export default function FreshStartOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-france" />;
}
