import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-no-reset-server');
}

export default function Neprenia15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-no-reset-server" />;
}
