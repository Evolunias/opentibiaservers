import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-ot');
}

export default function TibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-ot" />;
}
