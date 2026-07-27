import NoResetKasteriaTibiaKeywordPage, { generateMetadata } from './no-reset-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaTibiaKeywordPage />;
}
