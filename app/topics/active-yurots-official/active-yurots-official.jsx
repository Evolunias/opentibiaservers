import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-official');
}

export default function ActiveYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-official" />;
}
