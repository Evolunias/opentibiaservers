import NoResetNepreniaTibiaKeywordPage, { generateMetadata } from './no-reset-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaTibiaKeywordPage />;
}
