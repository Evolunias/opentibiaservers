import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-north-america');
}

export default function MistOfDeathNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-north-america" />;
}
