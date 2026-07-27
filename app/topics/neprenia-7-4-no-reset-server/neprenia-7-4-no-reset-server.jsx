import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-no-reset-server');
}

export default function Neprenia74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-no-reset-server" />;
}
