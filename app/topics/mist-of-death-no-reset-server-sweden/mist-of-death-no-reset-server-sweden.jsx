import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-no-reset-server-sweden');
}

export default function MistOfDeathNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-no-reset-server-sweden" />;
}
