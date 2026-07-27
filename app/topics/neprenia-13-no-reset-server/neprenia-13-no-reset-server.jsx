import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-no-reset-server');
}

export default function Neprenia13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-no-reset-server" />;
}
