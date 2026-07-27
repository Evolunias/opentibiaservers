import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-france');
}

export default function OriginaltibiaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-france" />;
}
