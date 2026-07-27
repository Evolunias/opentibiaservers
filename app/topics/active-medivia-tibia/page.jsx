import ActiveMediviaTibiaKeywordPage, { generateMetadata } from './active-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaTibiaKeywordPage />;
}
