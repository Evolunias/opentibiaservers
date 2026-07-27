import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-france');
}

export default function FreshStartServersFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-france" />;
}
