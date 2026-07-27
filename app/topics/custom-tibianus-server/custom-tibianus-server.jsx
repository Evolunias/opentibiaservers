import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-server');
}

export default function CustomTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-server" />;
}
