import TopRuthlessChaosTibiaKeywordPage, { generateMetadata } from './top-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosTibiaKeywordPage />;
}
