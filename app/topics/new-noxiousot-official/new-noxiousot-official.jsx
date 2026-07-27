import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-official');
}

export default function NewNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-official" />;
}
