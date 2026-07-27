import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-official');
}

export default function FreshStartNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-official" />;
}
