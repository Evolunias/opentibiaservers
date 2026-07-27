import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot');
}

export default function PopularNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot" />;
}
