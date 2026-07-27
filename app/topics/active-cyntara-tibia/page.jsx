import ActiveCyntaraTibiaKeywordPage, { generateMetadata } from './active-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraTibiaKeywordPage />;
}
