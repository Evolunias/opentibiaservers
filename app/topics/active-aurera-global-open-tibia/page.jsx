import ActiveAureraGlobalOpenTibiaKeywordPage, { generateMetadata } from './active-aurera-global-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalOpenTibiaKeywordPage />;
}
