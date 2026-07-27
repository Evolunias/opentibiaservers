import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-no-reset-server');
}

export default function MistOfDeath84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-no-reset-server" />;
}
