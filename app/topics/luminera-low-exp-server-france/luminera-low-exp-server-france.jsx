import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-france');
}

export default function LumineraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-france" />;
}
