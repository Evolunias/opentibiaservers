import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-no-reset-server');
}

export default function Sabrehaven11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-no-reset-server" />;
}
