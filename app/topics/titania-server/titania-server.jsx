import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-server');
}

export default function TitaniaServerKeywordPage() {
  return <StaticKeywordPage slug="titania-server" />;
}
