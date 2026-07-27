import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-client');
}

export default function ActiveElderaClientKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-client" />;
}
