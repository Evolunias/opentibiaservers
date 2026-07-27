import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-tibia');
}

export default function OfficialClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-tibia" />;
}
