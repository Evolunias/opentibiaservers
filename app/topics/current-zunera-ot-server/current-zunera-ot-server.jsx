import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-server');
}

export default function CurrentZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-server" />;
}
