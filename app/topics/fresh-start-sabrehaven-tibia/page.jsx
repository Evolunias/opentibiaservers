import FreshStartSabrehavenTibiaKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenTibiaKeywordPage />;
}
