import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-france');
}

export default function MidhemLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-france" />;
}
