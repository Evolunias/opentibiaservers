import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-tibia');
}

export default function ActiveClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-tibia" />;
}
