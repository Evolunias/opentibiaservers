import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-ots');
}

export default function CustomTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-ots" />;
}
