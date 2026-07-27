import ActiveTibiaraTibiaKeywordPage, { generateMetadata } from './active-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraTibiaKeywordPage />;
}
