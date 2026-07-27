import PopularSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './popular-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenOpenTibiaKeywordPage />;
}
