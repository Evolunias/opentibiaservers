import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot');
}

export default function NoxiousotKeywordPage() {
  return <StaticKeywordPage slug="noxiousot" />;
}
