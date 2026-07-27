import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-argentina');
}

export default function MistOfDeathHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-argentina" />;
}
