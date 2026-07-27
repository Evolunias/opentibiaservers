import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-ots');
}

export default function TibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-ots" />;
}
