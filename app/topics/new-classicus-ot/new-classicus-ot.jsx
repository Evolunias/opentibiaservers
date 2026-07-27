import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-ot');
}

export default function NewClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-ot" />;
}
