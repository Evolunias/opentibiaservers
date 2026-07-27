import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-france-servers');
}

export default function UnlineFranceServersKeywordPage() {
  return <StaticKeywordPage slug="unline-france-servers" />;
}
