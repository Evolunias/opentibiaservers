import LowrateSabrehavenTibiaKeywordPage, { generateMetadata } from './lowrate-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenTibiaKeywordPage />;
}
