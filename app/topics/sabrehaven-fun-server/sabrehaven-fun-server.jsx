import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fun-server');
}

export default function SabrehavenFunServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fun-server" />;
}
