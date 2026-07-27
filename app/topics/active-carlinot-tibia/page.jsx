import ActiveCarlinotTibiaKeywordPage, { generateMetadata } from './active-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotTibiaKeywordPage />;
}
