import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-seasonal-server');
}

export default function Neprenia12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-seasonal-server" />;
}
