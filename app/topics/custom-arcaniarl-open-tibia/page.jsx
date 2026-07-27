import CustomArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './custom-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlOpenTibiaKeywordPage />;
}
