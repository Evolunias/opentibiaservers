import PopularElderaTibiaKeywordPage, { generateMetadata } from './popular-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaTibiaKeywordPage />;
}
