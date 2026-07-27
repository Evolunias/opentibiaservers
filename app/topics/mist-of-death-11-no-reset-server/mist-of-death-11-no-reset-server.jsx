import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-no-reset-server');
}

export default function MistOfDeath11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-no-reset-server" />;
}
