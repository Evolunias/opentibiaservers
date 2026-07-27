import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fun-server');
}

export default function NostaltherFunServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fun-server" />;
}
