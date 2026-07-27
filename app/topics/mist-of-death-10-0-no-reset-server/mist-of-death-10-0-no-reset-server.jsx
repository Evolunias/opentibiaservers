import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-no-reset-server');
}

export default function MistOfDeath100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-no-reset-server" />;
}
