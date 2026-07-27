import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-ots');
}

export default function NewClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-ots" />;
}
