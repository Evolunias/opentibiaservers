import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-tibia');
}

export default function NewClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-tibia" />;
}
