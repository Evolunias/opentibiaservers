import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-ot-server');
}

export default function NewZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-ot-server" />;
}
