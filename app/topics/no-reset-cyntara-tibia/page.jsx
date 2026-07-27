import NoResetCyntaraTibiaKeywordPage, { generateMetadata } from './no-reset-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraTibiaKeywordPage />;
}
