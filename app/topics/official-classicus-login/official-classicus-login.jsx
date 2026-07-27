import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-login');
}

export default function OfficialClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-login" />;
}
