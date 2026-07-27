import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-server');
}

export default function ActiveTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-server" />;
}
