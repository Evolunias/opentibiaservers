import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-uk-server');
}

export default function NoxiousotUkServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-uk-server" />;
}
