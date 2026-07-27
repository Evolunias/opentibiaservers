import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-usa-servers');
}

export default function NoxiousotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-usa-servers" />;
}
