import NoResetRealestaTibiaKeywordPage, { generateMetadata } from './no-reset-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaTibiaKeywordPage />;
}
