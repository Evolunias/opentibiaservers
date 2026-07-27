import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-private-server');
}

export default function NewZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-private-server" />;
}
