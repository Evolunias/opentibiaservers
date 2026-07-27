import PopularSabrehavenTibiaKeywordPage, { generateMetadata } from './popular-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenTibiaKeywordPage />;
}
