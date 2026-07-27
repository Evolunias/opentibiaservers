import FreshStartAmeriaTibiaKeywordPage, { generateMetadata } from './fresh-start-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaTibiaKeywordPage />;
}
