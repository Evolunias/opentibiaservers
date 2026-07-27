import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-server');
}

export default function NoResetMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-server" />;
}
