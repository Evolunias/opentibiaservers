import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-active');
}

export default function OpenTibiaServerListActiveKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-active" />;
}
