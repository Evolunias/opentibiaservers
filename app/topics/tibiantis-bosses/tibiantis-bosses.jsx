import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-bosses');
}

export default function TibiantisBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-bosses" />;
}
