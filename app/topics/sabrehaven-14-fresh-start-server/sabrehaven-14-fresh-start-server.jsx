import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-fresh-start-server');
}

export default function Sabrehaven14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-fresh-start-server" />;
}
