import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-fresh-start-server-france');
}

export default function UnlineFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-fresh-start-server-france" />;
}
