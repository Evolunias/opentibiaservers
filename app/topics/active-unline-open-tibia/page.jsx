import ActiveUnlineOpenTibiaKeywordPage, { generateMetadata } from './active-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineOpenTibiaKeywordPage />;
}
