import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-official');
}

export default function ArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-official" />;
}
