import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-no-reset-server');
}

export default function Neprenia11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-no-reset-server" />;
}
