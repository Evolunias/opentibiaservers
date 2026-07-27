import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-private-server');
}

export default function PopularNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-private-server" />;
}
