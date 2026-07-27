import EvoleraTibiaKeywordPage, { generateMetadata } from './evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraTibiaKeywordPage />;
}
