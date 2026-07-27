import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-no-reset-server');
}

export default function Neprenia100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-no-reset-server" />;
}
