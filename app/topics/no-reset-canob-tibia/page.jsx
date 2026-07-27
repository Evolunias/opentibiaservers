import NoResetCanobTibiaKeywordPage, { generateMetadata } from './no-reset-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobTibiaKeywordPage />;
}
