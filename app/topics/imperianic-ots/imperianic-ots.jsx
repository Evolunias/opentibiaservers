import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-ots');
}

export default function ImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-ots" />;
}
