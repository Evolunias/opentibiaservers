import NoResetOlderaTibiaKeywordPage, { generateMetadata } from './no-reset-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaTibiaKeywordPage />;
}
