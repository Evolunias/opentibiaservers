import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-reset');
}

export default function TibiascapeResetKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-reset" />;
}
