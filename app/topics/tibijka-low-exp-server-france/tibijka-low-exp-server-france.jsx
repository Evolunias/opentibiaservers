import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-low-exp-server-france');
}

export default function TibijkaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-low-exp-server-france" />;
}
