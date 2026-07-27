import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-ot-server');
}

export default function ActiveZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-ot-server" />;
}
