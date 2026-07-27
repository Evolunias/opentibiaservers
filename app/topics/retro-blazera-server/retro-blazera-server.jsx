import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-blazera-server');
}

export default function RetroBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-blazera-server" />;
}
