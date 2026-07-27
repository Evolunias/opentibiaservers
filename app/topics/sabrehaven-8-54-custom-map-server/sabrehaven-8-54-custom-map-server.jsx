import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-54-custom-map-server');
}

export default function Sabrehaven854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-54-custom-map-server" />;
}
