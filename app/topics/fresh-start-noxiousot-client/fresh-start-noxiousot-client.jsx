import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-client');
}

export default function FreshStartNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-client" />;
}
