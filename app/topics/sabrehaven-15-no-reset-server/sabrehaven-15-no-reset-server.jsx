import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-no-reset-server');
}

export default function Sabrehaven15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-no-reset-server" />;
}
