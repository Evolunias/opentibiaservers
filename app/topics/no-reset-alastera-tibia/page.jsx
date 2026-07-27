import NoResetAlasteraTibiaKeywordPage, { generateMetadata } from './no-reset-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraTibiaKeywordPage />;
}
