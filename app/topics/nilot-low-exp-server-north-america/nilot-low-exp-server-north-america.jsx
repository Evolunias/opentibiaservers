import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-north-america');
}

export default function NilotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-north-america" />;
}
