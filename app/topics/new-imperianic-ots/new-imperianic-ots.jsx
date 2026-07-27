import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-ots');
}

export default function NewImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-ots" />;
}
