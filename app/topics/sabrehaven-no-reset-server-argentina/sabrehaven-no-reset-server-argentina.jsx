import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-argentina');
}

export default function SabrehavenNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-argentina" />;
}
