import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot');
}

export default function LowrateNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot" />;
}
