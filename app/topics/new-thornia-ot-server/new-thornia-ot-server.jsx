import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-ot-server');
}

export default function NewThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-ot-server" />;
}
