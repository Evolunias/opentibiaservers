import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-private-server');
}

export default function NewNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-private-server" />;
}
