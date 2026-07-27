import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-client');
}

export default function NoResetAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-client" />;
}
