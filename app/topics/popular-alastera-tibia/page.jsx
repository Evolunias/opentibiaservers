import PopularAlasteraTibiaKeywordPage, { generateMetadata } from './popular-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraTibiaKeywordPage />;
}
