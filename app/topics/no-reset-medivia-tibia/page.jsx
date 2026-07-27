import NoResetMediviaTibiaKeywordPage, { generateMetadata } from './no-reset-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaTibiaKeywordPage />;
}
