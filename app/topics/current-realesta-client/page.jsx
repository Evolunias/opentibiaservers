import CurrentRealestaClientKeywordPage, { generateMetadata } from './current-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaClientKeywordPage />;
}
