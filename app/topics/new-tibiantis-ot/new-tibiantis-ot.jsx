import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-ot');
}

export default function NewTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-ot" />;
}
