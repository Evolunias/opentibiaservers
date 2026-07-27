import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-brazil');
}

export default function OpenTibiaServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-brazil" />;
}
