import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-ot');
}

export default function NewThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-ot" />;
}
