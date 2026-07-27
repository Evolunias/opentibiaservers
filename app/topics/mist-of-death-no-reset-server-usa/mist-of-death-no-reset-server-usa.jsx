import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-usa');
}

export default function MistOfDeathNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-usa" />;
}
