import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-france');
}

export default function MidhemHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-france" />;
}
