import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-server');
}

export default function TopZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-server" />;
}
