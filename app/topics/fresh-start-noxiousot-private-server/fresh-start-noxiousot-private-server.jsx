import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-private-server');
}

export default function FreshStartNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-private-server" />;
}
