import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-ots');
}

export default function OfficialImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-ots" />;
}
