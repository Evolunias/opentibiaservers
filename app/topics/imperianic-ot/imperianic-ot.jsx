import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-ot');
}

export default function ImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="imperianic-ot" />;
}
