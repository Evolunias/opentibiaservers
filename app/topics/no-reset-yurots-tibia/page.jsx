import NoResetYurotsTibiaKeywordPage, { generateMetadata } from './no-reset-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsTibiaKeywordPage />;
}
