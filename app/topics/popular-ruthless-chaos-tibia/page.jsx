import PopularRuthlessChaosTibiaKeywordPage, { generateMetadata } from './popular-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosTibiaKeywordPage />;
}
