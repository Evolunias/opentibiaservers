import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-private-server');
}

export default function OfficialClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-private-server" />;
}
