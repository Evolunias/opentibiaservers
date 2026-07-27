import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-no-reset-server');
}

export default function Sabrehaven84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-no-reset-server" />;
}
