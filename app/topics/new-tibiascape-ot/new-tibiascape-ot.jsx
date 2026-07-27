import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-ot');
}

export default function NewTibiascapeOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-ot" />;
}
