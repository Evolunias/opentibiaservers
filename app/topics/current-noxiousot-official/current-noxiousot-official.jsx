import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-official');
}

export default function CurrentNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-official" />;
}
