import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-server');
}

export default function CustomZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-server" />;
}
