import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-server');
}

export default function NewZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-server" />;
}
