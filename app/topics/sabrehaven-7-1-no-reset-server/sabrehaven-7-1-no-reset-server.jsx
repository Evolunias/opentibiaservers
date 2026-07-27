import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-no-reset-server');
}

export default function Sabrehaven71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-no-reset-server" />;
}
