import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fun-server');
}

export default function TibiantisFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fun-server" />;
}
