import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-private-server');
}

export default function ActiveNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-private-server" />;
}
