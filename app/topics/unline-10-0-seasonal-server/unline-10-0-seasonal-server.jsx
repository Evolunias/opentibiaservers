import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-seasonal-server');
}

export default function Unline100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-seasonal-server" />;
}
