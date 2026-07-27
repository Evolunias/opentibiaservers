import NoResetBlazeraTibiaKeywordPage, { generateMetadata } from './no-reset-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraTibiaKeywordPage />;
}
