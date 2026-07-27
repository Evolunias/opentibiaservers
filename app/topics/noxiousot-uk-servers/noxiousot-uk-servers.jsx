import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-uk-servers');
}

export default function NoxiousotUkServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-uk-servers" />;
}
