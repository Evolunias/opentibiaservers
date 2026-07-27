import NoResetCanobClientKeywordPage, { generateMetadata } from './no-reset-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobClientKeywordPage />;
}
