import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-fresh-start-server-france');
}

export default function MiracleFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-fresh-start-server-france" />;
}
