import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-official');
}

export default function NoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-official" />;
}
