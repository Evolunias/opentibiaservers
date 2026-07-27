import PopularBlazeraTibiaKeywordPage, { generateMetadata } from './popular-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraTibiaKeywordPage />;
}
