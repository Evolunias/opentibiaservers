import BestEvoleraTibiaKeywordPage, { generateMetadata } from './best-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraTibiaKeywordPage />;
}
