import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-mexico-servers');
}

export default function CalmeraOtMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-mexico-servers" />;
}
