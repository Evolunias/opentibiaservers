import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-uk-server');
}

export default function CalmeraOtUkServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-uk-server" />;
}
