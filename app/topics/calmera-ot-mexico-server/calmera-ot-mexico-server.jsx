import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-mexico-server');
}

export default function CalmeraOtMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-mexico-server" />;
}
