import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-france');
}

export default function NoResetServersFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-france" />;
}
