import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-no-reset-server');
}

export default function Sabrehaven13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-no-reset-server" />;
}
