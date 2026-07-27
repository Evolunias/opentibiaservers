import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-server');
}

export default function FreshStartZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-server" />;
}
