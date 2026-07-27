import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-north-america');
}

export default function MistOfDeathHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-north-america" />;
}
