import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-france');
}

export default function RetroServersFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-france" />;
}
