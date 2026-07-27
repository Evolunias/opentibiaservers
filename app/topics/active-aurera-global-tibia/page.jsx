import ActiveAureraGlobalTibiaKeywordPage, { generateMetadata } from './active-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalTibiaKeywordPage />;
}
