import ActiveCarlinotOpenTibiaKeywordPage, { generateMetadata } from './active-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotOpenTibiaKeywordPage />;
}
