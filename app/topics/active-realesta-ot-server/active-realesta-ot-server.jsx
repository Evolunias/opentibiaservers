import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-ot-server');
}

export default function ActiveRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-ot-server" />;
}
