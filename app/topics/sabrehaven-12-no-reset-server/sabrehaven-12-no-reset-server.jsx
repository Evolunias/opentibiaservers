import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-no-reset-server');
}

export default function Sabrehaven12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-no-reset-server" />;
}
