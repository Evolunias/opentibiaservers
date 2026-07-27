import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-seasonal-server');
}

export default function Luminera80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-seasonal-server" />;
}
