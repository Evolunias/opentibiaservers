import NoResetCanobOtServerKeywordPage, { generateMetadata } from './no-reset-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobOtServerKeywordPage />;
}
