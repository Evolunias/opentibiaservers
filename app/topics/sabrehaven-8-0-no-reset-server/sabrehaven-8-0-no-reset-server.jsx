import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-no-reset-server');
}

export default function Sabrehaven80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-no-reset-server" />;
}
