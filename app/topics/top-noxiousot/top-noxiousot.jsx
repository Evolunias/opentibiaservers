import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot');
}

export default function TopNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot" />;
}
