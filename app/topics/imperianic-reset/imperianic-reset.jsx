import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-reset');
}

export default function ImperianicResetKeywordPage() {
  return <StaticKeywordPage slug="imperianic-reset" />;
}
