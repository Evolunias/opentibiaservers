import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-ot-server');
}

export default function FreshStartTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-ot-server" />;
}
