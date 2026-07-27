import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot');
}

export default function OfficialNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot" />;
}
