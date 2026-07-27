import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-ot-server');
}

export default function CurrentZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-ot-server" />;
}
