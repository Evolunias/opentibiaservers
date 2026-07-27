import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-chile-server');
}

export default function NostaltherChileServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-chile-server" />;
}
