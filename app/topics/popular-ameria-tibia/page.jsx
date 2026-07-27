import PopularAmeriaTibiaKeywordPage, { generateMetadata } from './popular-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaTibiaKeywordPage />;
}
