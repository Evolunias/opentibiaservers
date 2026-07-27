import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-no-reset-server');
}

export default function Neprenia14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-no-reset-server" />;
}
