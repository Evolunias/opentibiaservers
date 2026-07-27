import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-north-america');
}

export default function MistOfDeathLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-north-america" />;
}
