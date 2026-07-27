import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-no-reset-server');
}

export default function Sabrehaven14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-no-reset-server" />;
}
