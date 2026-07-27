import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot');
}

export default function NewNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot" />;
}
