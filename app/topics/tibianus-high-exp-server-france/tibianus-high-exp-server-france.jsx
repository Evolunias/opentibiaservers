import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-high-exp-server-france');
}

export default function TibianusHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-high-exp-server-france" />;
}
