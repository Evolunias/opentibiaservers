import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-ot');
}

export default function ActiveTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-ot" />;
}
