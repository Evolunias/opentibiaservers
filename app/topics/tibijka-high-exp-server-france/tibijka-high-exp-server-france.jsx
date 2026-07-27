import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-high-exp-server-france');
}

export default function TibijkaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-high-exp-server-france" />;
}
