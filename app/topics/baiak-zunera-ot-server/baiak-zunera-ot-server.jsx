import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-zunera-ot-server');
}

export default function BaiakZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-zunera-ot-server" />;
}
