import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-ot-server');
}

export default function NewTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-ot-server" />;
}
