import TopKasteriaTibiaKeywordPage, { generateMetadata } from './top-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaTibiaKeywordPage />;
}
