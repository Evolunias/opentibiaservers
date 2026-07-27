import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot');
}

export default function ActiveNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot" />;
}
