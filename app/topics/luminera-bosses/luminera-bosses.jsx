import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-bosses');
}

export default function LumineraBossesKeywordPage() {
  return <StaticKeywordPage slug="luminera-bosses" />;
}
