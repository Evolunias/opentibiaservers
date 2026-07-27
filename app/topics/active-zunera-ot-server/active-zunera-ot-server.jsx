import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-server');
}

export default function ActiveZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-server" />;
}
