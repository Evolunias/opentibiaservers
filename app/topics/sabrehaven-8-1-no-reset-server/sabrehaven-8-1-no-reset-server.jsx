import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-no-reset-server');
}

export default function Sabrehaven81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-no-reset-server" />;
}
