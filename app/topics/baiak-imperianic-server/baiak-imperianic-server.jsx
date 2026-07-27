import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-imperianic-server');
}

export default function BaiakImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-imperianic-server" />;
}
