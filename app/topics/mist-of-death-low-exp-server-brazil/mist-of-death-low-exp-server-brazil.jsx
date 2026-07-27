import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-brazil');
}

export default function MistOfDeathLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-brazil" />;
}
