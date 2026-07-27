import PopularNepreniaTibiaKeywordPage, { generateMetadata } from './popular-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaTibiaKeywordPage />;
}
