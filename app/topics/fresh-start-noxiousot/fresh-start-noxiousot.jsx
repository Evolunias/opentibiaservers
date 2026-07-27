import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot');
}

export default function FreshStartNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot" />;
}
