import TopEvoleraTibiaKeywordPage, { generateMetadata } from './top-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraTibiaKeywordPage />;
}
