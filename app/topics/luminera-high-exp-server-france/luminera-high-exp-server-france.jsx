import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-france');
}

export default function LumineraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-france" />;
}
