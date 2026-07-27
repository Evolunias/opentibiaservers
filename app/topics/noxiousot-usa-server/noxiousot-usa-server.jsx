import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-usa-server');
}

export default function NoxiousotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-usa-server" />;
}
