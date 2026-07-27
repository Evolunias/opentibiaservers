import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-seasonal-server');
}

export default function Unline12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-seasonal-server" />;
}
