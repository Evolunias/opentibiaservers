import NoResetCanobOtKeywordPage, { generateMetadata } from './no-reset-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobOtKeywordPage />;
}
