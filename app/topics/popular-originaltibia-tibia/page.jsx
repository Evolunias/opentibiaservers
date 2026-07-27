import PopularOriginaltibiaTibiaKeywordPage, { generateMetadata } from './popular-originaltibia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOriginaltibiaTibiaKeywordPage />;
}
