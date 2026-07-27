import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-france');
}

export default function FreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-france" />;
}
