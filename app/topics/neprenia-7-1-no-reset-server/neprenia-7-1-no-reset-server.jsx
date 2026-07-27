import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-no-reset-server');
}

export default function Neprenia71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-no-reset-server" />;
}
