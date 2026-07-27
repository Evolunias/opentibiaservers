import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-uk-server');
}

export default function UnlineUkServerKeywordPage() {
  return <StaticKeywordPage slug="unline-uk-server" />;
}
