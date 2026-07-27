import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-brazil');
}

export default function ImperianicLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-brazil" />;
}
