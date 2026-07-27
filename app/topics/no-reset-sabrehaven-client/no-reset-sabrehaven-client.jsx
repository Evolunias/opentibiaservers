import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-client');
}

export default function NoResetSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-client" />;
}
