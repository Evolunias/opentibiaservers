import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-status');
}

export default function NoxiousotStatusKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-status" />;
}
