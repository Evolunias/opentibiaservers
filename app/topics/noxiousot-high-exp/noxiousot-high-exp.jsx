import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp');
}

export default function NoxiousotHighExpKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp" />;
}
