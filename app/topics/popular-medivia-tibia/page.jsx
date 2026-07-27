import PopularMediviaTibiaKeywordPage, { generateMetadata } from './popular-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaTibiaKeywordPage />;
}
