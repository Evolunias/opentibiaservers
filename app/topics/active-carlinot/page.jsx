import ActiveCarlinotKeywordPage, { generateMetadata } from './active-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotKeywordPage />;
}
