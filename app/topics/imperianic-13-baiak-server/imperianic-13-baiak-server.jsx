import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-baiak-server');
}

export default function Imperianic13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-baiak-server" />;
}
