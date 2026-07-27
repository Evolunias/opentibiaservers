import PopularEvoluniaTibiaKeywordPage, { generateMetadata } from './popular-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaTibiaKeywordPage />;
}
