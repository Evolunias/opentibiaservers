import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-ot');
}

export default function CustomTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-ot" />;
}
