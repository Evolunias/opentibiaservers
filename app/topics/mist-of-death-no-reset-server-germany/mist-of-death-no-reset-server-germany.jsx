import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-germany');
}

export default function MistOfDeathNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-germany" />;
}
