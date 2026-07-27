import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-demolidores-server');
}

export default function RetroDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="retro-demolidores-server" />;
}
