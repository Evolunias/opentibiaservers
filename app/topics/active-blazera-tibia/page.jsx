import ActiveBlazeraTibiaKeywordPage, { generateMetadata } from './active-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraTibiaKeywordPage />;
}
