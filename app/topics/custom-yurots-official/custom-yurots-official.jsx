import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-official');
}

export default function CustomYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-official" />;
}
