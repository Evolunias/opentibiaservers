import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-bosses');
}

export default function AlasteraBossesKeywordPage() {
  return <StaticKeywordPage slug="alastera-bosses" />;
}
