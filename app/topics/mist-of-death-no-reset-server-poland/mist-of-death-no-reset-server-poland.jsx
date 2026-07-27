import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-poland');
}

export default function MistOfDeathNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-poland" />;
}
