import CustomArcaniarlTibiaKeywordPage, { generateMetadata } from './custom-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlTibiaKeywordPage />;
}
