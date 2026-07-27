import ActiveAlasteraTibiaKeywordPage, { generateMetadata } from './active-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraTibiaKeywordPage />;
}
