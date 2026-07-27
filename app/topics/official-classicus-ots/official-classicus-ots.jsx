import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-ots');
}

export default function OfficialClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-ots" />;
}
