import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-high-exp-server-argentina');
}

export default function ImperianicHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-high-exp-server-argentina" />;
}
