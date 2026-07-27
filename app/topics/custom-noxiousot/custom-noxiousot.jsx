import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot');
}

export default function CustomNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot" />;
}
