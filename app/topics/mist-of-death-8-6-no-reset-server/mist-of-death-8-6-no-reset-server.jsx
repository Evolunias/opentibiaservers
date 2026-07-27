import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-6-no-reset-server');
}

export default function MistOfDeath86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-6-no-reset-server" />;
}
