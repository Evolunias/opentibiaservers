import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-cyntara-server');
}

export default function RetroCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-cyntara-server" />;
}
