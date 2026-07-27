import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-dura-online-server');
}

export default function RetroDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="retro-dura-online-server" />;
}
