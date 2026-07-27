import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-argentina');
}

export default function OpenTibiaServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-argentina" />;
}
