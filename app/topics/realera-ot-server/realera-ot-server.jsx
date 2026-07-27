import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-ot-server');
}

export default function RealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="realera-ot-server" />;
}
