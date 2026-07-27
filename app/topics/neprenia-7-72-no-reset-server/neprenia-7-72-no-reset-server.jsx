import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-no-reset-server');
}

export default function Neprenia772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-no-reset-server" />;
}
