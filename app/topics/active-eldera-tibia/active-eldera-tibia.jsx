import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-tibia');
}

export default function ActiveElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-tibia" />;
}
