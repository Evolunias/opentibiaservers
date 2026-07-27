import ActiveLumineraTibiaKeywordPage, { generateMetadata } from './active-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraTibiaKeywordPage />;
}
