import NoResetSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './no-reset-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenOpenTibiaKeywordPage />;
}
