import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-europe');
}

export default function MistOfDeathNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-europe" />;
}
