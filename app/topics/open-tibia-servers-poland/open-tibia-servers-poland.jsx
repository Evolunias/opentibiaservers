import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-poland');
}

export default function OpenTibiaServersPolandKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-poland" />;
}
