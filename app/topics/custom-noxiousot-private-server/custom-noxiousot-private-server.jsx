import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-private-server');
}

export default function CustomNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-private-server" />;
}
