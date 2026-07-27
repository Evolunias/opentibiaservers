import NoResetUnlineTibiaKeywordPage, { generateMetadata } from './no-reset-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineTibiaKeywordPage />;
}
