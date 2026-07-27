import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-no-reset-server');
}

export default function MistOfDeath71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-no-reset-server" />;
}
