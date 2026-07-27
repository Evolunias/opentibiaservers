import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-list-france');
}

export default function FreshStartServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-list-france" />;
}
