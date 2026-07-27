import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-poland-servers');
}

export default function NoxiousotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-poland-servers" />;
}
