import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-france');
}

export default function LowExpServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-france" />;
}
