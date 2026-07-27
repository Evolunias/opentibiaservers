import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-brazil');
}

export default function OpenTibiaServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-brazil" />;
}
