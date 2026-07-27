import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-usa');
}

export default function OpenTibiaServersUsaKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-usa" />;
}
