import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-usa');
}

export default function MistOfDeathLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-usa" />;
}
