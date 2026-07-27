import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-no-reset-server');
}

export default function Sabrehaven100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-no-reset-server" />;
}
