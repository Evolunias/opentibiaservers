import NoResetClientUsaKeywordPage, { generateMetadata } from './no-reset-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientUsaKeywordPage />;
}
