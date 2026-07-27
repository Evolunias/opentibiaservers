import ActiveNepreniaTibiaKeywordPage, { generateMetadata } from './active-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaTibiaKeywordPage />;
}
