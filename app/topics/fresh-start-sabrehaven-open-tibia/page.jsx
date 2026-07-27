import FreshStartSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenOpenTibiaKeywordPage />;
}
