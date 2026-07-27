import NoResetCanobLoginKeywordPage, { generateMetadata } from './no-reset-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobLoginKeywordPage />;
}
