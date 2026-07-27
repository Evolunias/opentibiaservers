import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera');
}

export default function ActiveElderaKeywordPage() {
  return <StaticKeywordPage slug="active-eldera" />;
}
