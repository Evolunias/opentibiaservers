import NoResetMidhemOpenTibiaKeywordPage, { generateMetadata } from './no-reset-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemOpenTibiaKeywordPage />;
}
