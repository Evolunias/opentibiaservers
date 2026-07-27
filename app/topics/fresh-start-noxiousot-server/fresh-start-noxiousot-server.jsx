import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-server');
}

export default function FreshStartNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-server" />;
}
