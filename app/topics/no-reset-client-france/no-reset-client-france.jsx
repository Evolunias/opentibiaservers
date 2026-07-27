import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-france');
}

export default function NoResetClientFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-france" />;
}
