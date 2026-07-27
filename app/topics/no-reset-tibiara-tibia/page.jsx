import NoResetTibiaraTibiaKeywordPage, { generateMetadata } from './no-reset-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraTibiaKeywordPage />;
}
