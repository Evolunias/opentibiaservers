import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-no-reset-server');
}

export default function Sabrehaven74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-no-reset-server" />;
}
