import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-france');
}

export default function OpenTibiaServersFranceKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-france" />;
}
