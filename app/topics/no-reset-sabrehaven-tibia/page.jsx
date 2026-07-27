import NoResetSabrehavenTibiaKeywordPage, { generateMetadata } from './no-reset-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenTibiaKeywordPage />;
}
