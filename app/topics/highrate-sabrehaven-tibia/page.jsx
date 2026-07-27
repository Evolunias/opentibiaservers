import HighrateSabrehavenTibiaKeywordPage, { generateMetadata } from './highrate-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenTibiaKeywordPage />;
}
