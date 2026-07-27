import ActiveRealestaTibiaKeywordPage, { generateMetadata } from './active-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaTibiaKeywordPage />;
}
