import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-argentina');
}

export default function MistOfDeathLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-argentina" />;
}
