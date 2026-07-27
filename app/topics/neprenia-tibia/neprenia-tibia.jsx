import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-tibia');
}

export default function NepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-tibia" />;
}
