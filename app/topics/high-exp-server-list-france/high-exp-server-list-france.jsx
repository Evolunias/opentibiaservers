import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-france');
}

export default function HighExpServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-france" />;
}
