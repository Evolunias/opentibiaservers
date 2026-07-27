import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-france');
}

export default function BestOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-france" />;
}
