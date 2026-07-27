import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-wiki-france');
}

export default function NoResetWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-wiki-france" />;
}
