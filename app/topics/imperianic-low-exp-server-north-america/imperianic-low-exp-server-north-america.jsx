import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-north-america');
}

export default function ImperianicLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-north-america" />;
}
