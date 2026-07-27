import NoResetMidhemTibiaKeywordPage, { generateMetadata } from './no-reset-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemTibiaKeywordPage />;
}
