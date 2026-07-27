import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-ot-server');
}

export default function TibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-ot-server" />;
}
