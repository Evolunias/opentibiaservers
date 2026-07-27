import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-ots');
}

export default function NewThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-ots" />;
}
