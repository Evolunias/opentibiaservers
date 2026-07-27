import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-ot-server');
}

export default function CustomZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-ot-server" />;
}
